import fetch from '../utils/fetch';
import { User, Entry } from './state/reducer';


/**
 * 加入群组
 * @param groupId 群组id
 */
// export async function joinGroup(groupId: string) {
//     const [, group] = await fetch('joinGroup', { groupId });
//     return group;
// }

export async function login() {
    return {
        _id: "01",
        userName: "user01",
    };
}

export async function getEntries() {
    return [
        {
            _id: "001",
            categoryId: "001",
            name: "001",
            amount: 1,
            createTime: "001",
        },
        {
            _id: "001",
            categoryId: "001",
            name: "001",
            amount: 1,
            createTime: "001",
        },
        {
            _id: "001",
            categoryId: "001",
            name: "001",
            amount: 1,
            createTime: "001",
        },
    ]

}
