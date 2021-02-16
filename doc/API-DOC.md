# Acenek 接口文档

## 返回数据结构定义

### User

```js
{
    _id, // {string} id
}
```

## 接口列表

### 用户注册

```js
socket.emit(
    'register',
    {
        username, // {string} 用户名
        password, // {string} 密码
    },
    user => { }, // {User} 用户数据
);
```
