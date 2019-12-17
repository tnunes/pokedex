export default function typeColor(type) {
  switch (type) {
    case 'grass':
      return 'var(--sap-green)';
    case 'poison':
      return 'var(--light-purple)';
    case 'fire':
      return 'var(--brick)';
    case 'water':
      return 'var(--dark-sky-blue)';
    case 'flying':
      return 'var(--royal)';
    case 'electric':
      return 'var(--macaroni-and-cheese)';
    case 'bug':
      return 'var(--green-leaf)';
    case 'normal':
      return 'var(--metallic-blue)';
    case 'ground':
      return 'var(--deep-bronze)';
    case 'fairy':
      return 'var(--cerise)';
    case 'fighting':
      return 'var(--mosque)';
    case 'psychic':
      return 'var(--medium-purple)';
    case 'steel':
      return 'var(--gray)';
    case 'ghost':
      return 'var(--studio)';
    case 'ice':
      return 'var(--malibu)';
    case 'rock':
      return 'var(--silver-chalice)';
    case 'dragon':
      return 'var(--madras)';
    case 'dark':
      return 'var(--mine-shaft)';
    case 'shadow':
      return 'var(--emperor)';
    case 'unknown':
    default:
      return 'var(--black)';
  }
}
