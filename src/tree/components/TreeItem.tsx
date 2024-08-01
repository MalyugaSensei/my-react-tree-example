import { memo, useEffect, useState } from "react"
import { TreeProps } from "."
import './TreeItem.css'

function TreeItem({
    item,
    indent,
    curIndent,
    onCreate,
    onDelete,
    onChange }: {
        item: TreeProps,
        indent: number,
        curIndent: number,
        onCreate?: (parentId: string) => void | null,
        onDelete?: (id: string) => void | null,
        onChange?: (id: string, value: string | null) => void | null
    }) {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(item.title)

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange && onChange(item.id, title)
        }, 2500)

        return () => clearTimeout(timer)
    }, [title])

    return (
        <>
            <div
                className="tree-item"
                style={{ paddingLeft: `${curIndent}pt` }}>
                <div>
                    {
                        item.children.length !== 0 &&
                        <>
                            {
                                isOpen
                                    ? <button
                                        key={item.id}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F" />
                                        </svg>
                                    </button>
                                    : <button
                                        key={item.id}
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F" />
                                        </svg>
                                    </button>
                            }
                        </>
                    }
                </div>
                <input
                    type="text"
                    className="tree-item-title"
                    key={item.id}
                    contentEditable={true}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <div style={{ display: 'flex' }}>
                    {
                        onDelete &&
                        <button
                            key={item.id + 'delete'}
                            onClick={() => onDelete(item.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    }
                    {
                        onCreate &&
                        <button
                            key={item.id + 'create'}
                            onClick={() => onCreate(item.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    }
                </div>
            </div>

            {item.children && isOpen && item.children.map((item =>
                <TreeItem
                    key={item.id}
                    item={item}
                    indent={indent}
                    curIndent={curIndent + indent}
                    onCreate={onCreate}
                    onDelete={onDelete}
                />
            ))}
        </>
    )
}

export default memo(TreeItem)