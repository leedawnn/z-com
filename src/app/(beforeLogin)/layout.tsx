import styles from '@/app/page.module.css';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const Layout = ({ children, modal }: Props) => {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
};

export default Layout;
