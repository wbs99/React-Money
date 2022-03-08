import cs from 'classnames'

// 解决每次引入图片都要 require('图片路径') 的问题
// 也就是引用整个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

//引入 Icon 之后只需要给一个 svg 的 name 就可以显示 svg
type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const { name, children, className, ...rest } = props
  return (
    <svg className={cs('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  )
}
export default Icon
