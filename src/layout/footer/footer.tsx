import './footer.scss';

export default function Footer() {
  return (
    <footer className={'footer'}>
      <div>{new Date().getFullYear()} footer.</div>
    </footer>
  );
}
