import structure from '../../structure'
import Tree from './Tree'
import { useTreeActions } from '../feature/useTreeActions'

function TreeContainer() {

    const [onCreate, onDelete, onChange, structureData] = useTreeActions(structure)

    return (
        <>
            <div style={{ margin: "10px 0" }}>
                <button onClick={() => onCreate(null)}>
                    <b>+</b> Добавить
                </button>
            </div>
            <Tree
                data={structureData}
                onCreate={onCreate}
                onDelete={onDelete}
                onChange={onChange}
            />
        </>
    )
}

export default TreeContainer