<template>
    <div>
        <table border="1" width="300">
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
            <tr align="center" v-for="item in state.userList" :key="item.id">
                <td>{{ item.id }}</td>
                <td :data-index="index" data-field="name">
                    <span>{{ item.name }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { io } from "socket.io-client";
import { reactive } from "vue";

const socket = io("http://localhost:3000");

const state = reactive({
    userList: [],
});

socket.on("loadData", (data) => {
    console.log(data);
    state.userList = data;
});
</script>

<style lang="scss" scoped></style>
