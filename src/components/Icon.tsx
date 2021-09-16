// 解决每次引入图片都要 require('图片路径') 的问题
// 也就是引用整个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

//引入 Icon 之后只需要给一个 svg 的 name 就可以显示 svg
type Props = {
  name: string;
};

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};
export default Icon;
