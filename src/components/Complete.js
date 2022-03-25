const TodoCompleted = ({ list }) => {
    return (
        <div className="max-w-sm mt-5 rounded  overflow-hidden shadow-lg">
            <div className="p-5">
                {list.title}
            </div>
        </div>

    );
}
export default TodoCompleted;