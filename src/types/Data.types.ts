export type ProjectType = {
  UI__getAllProjects: partialProjectProps[]
}
export type partialProjectProps = {
  id: string,
  title: string,
  start: string,
  end:string,
  client : {
    name:string
  },
  role:string,
  url: string
}