import {PageContainer} from '@ant-design/pro-layout';
import {Alert, Card, Typography} from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({children}) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
