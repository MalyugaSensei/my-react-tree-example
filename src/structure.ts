import { TreeProps } from "./tree/components/Tree"

const structure: Array<TreeProps> = [
    {
        "id": "1",
        "title": "BMW",
        "children": [
            {
                "id": "1-1",
                "title": "X5",
                "children": [
                    {
                        "id": "1-1-1",
                        "title": "X5",
                        "children": []
                    },
                    {
                        "id": "1-1-2",
                        "title": "X6",
                        "children": []
                    }
                ]
            },
            {
                "id": "1-2",
                "title": "X6",
                "children": []
            }
        ]
    },
    {
        "id": "2",
        "title": "Audi",
        "children": [
            {
                "id": "2-1",
                "title": "A5",
                "children": []
            },
            {
                "id": "2-2",
                "title": "A6",
                "children": []
            }
        ]
    },
    {
        "id": "3",
        "title": "Mercedes",
        "children": [
            {
                "id": "3-1",
                "title": "C-class",
                "children": []
            },
            {
                "id": "3-2",
                "title": "E-class",
                "children": []
            }
        ]
    }
]

export default structure