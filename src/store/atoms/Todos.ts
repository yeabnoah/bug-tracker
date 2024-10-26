import { atom, selector } from "recoil";

export type CategoryType = "home" | "work" | "school";

export interface TodoInterface {
    title: string;
    category: CategoryType;
}

const todoAtom = atom<TodoInterface[]>({
    key: "todoAtom",
    default: [],
});

export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const filterCategory = get(todoCategoryFilterAtom);
        return filterCategory ? todos.filter(todo => todo.category === filterCategory) : todos;
    }
});

export const todoCategoryFilterAtom = atom<string | null>({
    key: 'todoCategoryFilterAtom',
    default: null,
});

export default todoAtom;
