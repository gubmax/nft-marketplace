import { ComponentType, lazy, PropsWithRef, ReactNode, Suspense } from 'react'

interface DynamicProps {
  fallback?: ReactNode
}

export type DynamicComponentType<P = unknown> = ComponentType<P & DynamicProps> & {
  loader: DynamicFactory<P>
}

interface DynamicModule<P> {
  default: ComponentType<P>
}

type DynamicFactory<P> = () => Promise<DynamicModule<P>>

export function dynamic<P>(factory: DynamicFactory<P>): DynamicComponentType<P> {
  let cache: DynamicModule<P> | null = null

  function Dynamic({ fallback, ...rest }: P & DynamicProps) {
    const LazyComponent = lazy(async function dynamicFactory() {
      if (cache !== null) return cache

      const component = await factory()
      cache = component
      return component
    })

    const Component = cache?.default ?? LazyComponent
    const componentProps = rest as P & PropsWithRef<P> & JSX.IntrinsicAttributes

    return (
      <Suspense fallback={fallback}>
        <Component {...componentProps} />
      </Suspense>
    )
  }

  Dynamic.loader = factory

  return Dynamic
}
