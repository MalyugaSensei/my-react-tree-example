import { TreeProps } from "./tree/components/"

const structure: Array<TreeProps> = [
    {
        "id": "1",
        "title": "ГАЗ",
        "children": [
            {
                "id": "1-1",
                "title": "24",
                "children": [
                    {
                        "id": "1-1-1",
                        "title": "2410",
                        "children": []
                    },
                    {
                        "id": "1-1-2",
                        "title": "2424",
                        "children": []
                    }
                ]
            },
            {
                "id": "1-2",
                "title": "3110",
                "children": []
            }
        ]
    },
    {
        "id": "2",
        "title": "ЛАДА",
        "children": [
            {
                "id": "2-1",
                "title": "2101",
                "children": []
            },
            {
                "id": "2-2",
                "title": "2105",
                "children": []
            }
        ]
    },
    {
        "id": "3",
        "title": "УАЗ",
        "children": [
            {
                "id": "3-1",
                "title": "Буханка",
                "children": []
            },
            {
                "id": "3-2",
                "title": "Патриот",
                "children": []
            }
        ]
    }
]

export default structure