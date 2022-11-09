


export default function(Vue:any) {
  const files:any = import.meta.glob('../components/common/*.vue', { eager: true })


  console.log(files)
  Object.keys(files).forEach((fileName:string) => {
    let componentname:any = fileName.replace(/(\.\/|\.vue)/g, '').split('/')
    componentname = componentname[componentname.length - 1]
    Vue.component('common-' + componentname, files[fileName].default)
  })
}
