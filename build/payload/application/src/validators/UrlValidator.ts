import {Validate} from "payload/types";

const UrlValidator = (): Validate => (value): true | string => {
    if (value === null || value === undefined) {
        return true
    }
    if (typeof value !== "string") {
        return 'Invlaid URL'
    }
    try {
        new URL(value)
    } catch (error) {
        return 'Invalid URL'
    }
    return true
}

export default UrlValidator
