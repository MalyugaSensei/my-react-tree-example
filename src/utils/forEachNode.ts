import { TreeProps } from "../tree/components"

export const forEachNode = function (
    data: Array<TreeProps>,
    callback: (node: TreeProps, parentArray: Array<TreeProps>) => void | boolean
): void | boolean {
    if (!data) return
    data.forEach((n: TreeProps) => {
        let result = callback(n, data)
        if (result) return result
        if (n.children.length !== 0) {
            let childrenResult = forEachNode(n.children, callback)
            if (childrenResult) return childrenResult
        }
    })
}