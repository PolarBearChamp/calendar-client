import UserControlButton from "../../ui/buttons/UserControlButton";

import styles from "./UserControls.module.scss";

const UserControls = () => {
  return (
    <div className={styles.container}>
      <UserControlButton route="friends" icon="friends.svg" />
      <UserControlButton route="discovery" icon="compass.svg" />
      <UserControlButton route="profile" icon="legasov.png" />
    </div>
  );
};

export default UserControls;
