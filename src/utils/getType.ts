const getType = (
  color: string,
): 'default' | 'warning' | 'success' | 'danger' | 'primary' | undefined => {
  switch (color) {
    case '#94979E':
      return 'default';
    case '#FFBF00':
      return 'warning';
    case '#40BF54':
      return 'success';
    default:
      return 'danger';
  }
};

export default getType;
