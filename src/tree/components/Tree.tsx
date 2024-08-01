import './Tree.css'
import { TreeProps } from "."
import TreeItem from "./TreeItem"
import { useCallback } from 'react'

function Tree({
    data,
    indent = 10,
    onCreate,
    onDelete,
    onChange
}: {
    data: Array<TreeProps>,
    indent?: number,
    onCreate?: (parentId: string) => void | null,
    onDelete?: (id: string) => void | null
    onChange?: (id: string, value: string | null) => void | null
}) {

    const onChangeHandler = useCallback((id: string, value: string | null) => {
        console.log(id)
        if (onChange) {
            return onChange(id, value)
        }
    }, [onChange])

    const onCreateHandler = useCallback((parentId: string) => {
        console.log(parentId)
        if (onCreate) {
            return onCreate(parentId)
        }
    }, [onCreate])

    const onDeleteHandler = useCallback((id: string) => {
        console.log(id)
        if (onDelete) {
            return onDelete(id)
        }
    }, [onDelete])

    return (
        <div className="tree">
            {
                data.map((item) =>
                    <TreeItem
                        key={item.id}
                        item={item}
                        indent={indent}
                        curIndent={indent}
                        onCreate={onCreateHandler}
                        onDelete={onDeleteHandler}
                        onChange={onChangeHandler}
                    />
                )
            }
        </div>
    )
}

export default Tree