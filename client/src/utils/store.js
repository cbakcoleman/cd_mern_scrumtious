const tasks = [
    {
        id: "task-1",
        content: "Edit list title"
    },
    {
        id: "task-2",
        content: "Complete tasks/Delete tasks, Lists"
    },
    {
        id: "task-3",
        content: "Drag and drop tasks"
    }
];

const data = {
    lists: {
        "list-1" : {
            id: "list-1",
            title: "To do",
            tasks,
        },
        "list-2" : {
            id: "list-2",
            title: "Doing",
            tasks: [],
        }
    },
    listIds: ["list-1", "list-2"]
};

export default data;