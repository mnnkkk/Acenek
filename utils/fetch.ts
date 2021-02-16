import socket from '../client/socket';

export default function fetch<T = any>(event: string, data = {}): Promise<[string | null, T | null]> {
    return new Promise((resolve) => {
        socket.emit(event, data, (res: any) => {
            if (typeof res === 'string')
                resolve([res, null]);
            else
                resolve([null, res]);
        });
    });
}
