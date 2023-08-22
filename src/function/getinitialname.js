export const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0)).join('');
    return initials.toUpperCase();
  };