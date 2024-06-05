import {Field} from "payload/types";

const EmojiField = (): Field => ({
    name: 'emoji',
    type: 'text',
    required: true,
})

export default EmojiField
