import fetch from '../utils/fetch';

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
