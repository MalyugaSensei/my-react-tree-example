export interface TreeProps {
    id: string,
    title: string,
    children: Array<TreeProps>
}