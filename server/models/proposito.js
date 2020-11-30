const keystone = require("keystone")

const { Types } = keystone.Field

const proposito = new keystone.List("proposito", {
    map: { name: "key" },
    unique: true,
    nocreate: true,
    nodelete: true,
})

proposito.add({

    key: {
        type: Types.Text,
        value: "Propósito",
        noedit: true
    },
    missao: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    valores: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    visao: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    }


})

proposito.register()