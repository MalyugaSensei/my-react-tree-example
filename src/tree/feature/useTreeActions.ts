import { useState } from "react";
import { TreeProps } from "../components";
import { forEachNode } from "../../utils/forEachNode";

export function useTreeActions(structure: Array<TreeProps>):
    [
        (parentId: string | null) => void,
        (id: string) => void,
        (id: string, value: string | null) => void,
        Array<TreeProps>,
        React.Dispatch<React.SetStateAction<TreeProps[]>>
    ] {
    const [structureData, setStructureData] = useState(structure)

    const onCreate = (parentId: string | null) => {
        if (!parentId) {
            const newItem: TreeProps = {
                id: (structureData.length + 1).toString(),
                title: "new item",
                children: [],
            }
            setStructureData([...structureData, newItem])
            return
        }

        const tempStructureData = structuredClone(structureData)

        forEachNode(tempStructureData, (node: TreeProps) => {
            if (node.id === parentId) {
                node.children.push({
                    id: parentId + "-" + (node.children.length + 1).toString(),
                    title: "new item",
                    children: [],
                })
                return true
            }
        })

        setStructureData(tempStructureData)

    }

    const onChange = (id: string, value: string | null) => {
        const tempStructureData = structuredClone(structureData)

        forEachNode(tempStructureData, (node: TreeProps) => {
            if (node.id === id) {
                node.title = value ? value : ""
                return true
            }
        })

        setStructureData(tempStructureData)
    }

    const onDelete = (id: string) => {
        const tempStructureData = structuredClone(structureData)
        console.log(tempStructureData)
        forEachNode(tempStructureData, (node: TreeProps | undefined | null, parentArray) => {
            if (!node) return
            if (node.id === id) {
                parentArray.splice(parentArray.indexOf(node), 1)
                return true
            }
        })
        console.log(tempStructureData)
        setStructureData(tempStructureData)
    }

    return [onCreate, onDelete, onChange, structureData, setStructureData]
}