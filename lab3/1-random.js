const random = (min = 0, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    // формула включає масштабування та зсув
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { random };
