export const loadIcon = async (IconName) => {
  try {
    const module = await import(`./assets/icons/${IconName}.svg`);
    return module.default;
  } catch (error) {
    console.error('Image not found', error);
    return null;
  }
};
