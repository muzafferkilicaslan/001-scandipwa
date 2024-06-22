export const testPlugin = (args, callback) => {
    console.log('Extension is working!');

    return callback(...args);
};

export default {
    'Component/Header/Component': {
        'member-function': {
            render: testPlugin,
        },
    },
};
