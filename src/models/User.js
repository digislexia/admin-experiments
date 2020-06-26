// Тип - это может быть поле или связь
// fields: { ... }, relations: { ... }, actions { ... }

/*
    TODO:
     Детальный вывод
     Обработка связей
 */

import Order from "@/models/Order";
import TextInput from "@/components/TextInput";

class User {
    id;
    constructor(fields) {
        Object.assign(this, fields);
    }
    blockUser() {
        console.log(`blockUser ${this.id}`);
    }
}

User.fields = {
    id: {
        tableComponent: TextInput,
        detailComponent: TextInput,
    },
    email: {
        tableComponent: TextInput,
        detailComponent: TextInput,
    }
};

User.relations = {
    orders: Order,
}

User.actions = {
    blockUser: {
        handler: 'blockUser',
        title: 'Заблокировать',
    }
};

const user = new User({id: 6});
user.blockUser();

export default User;