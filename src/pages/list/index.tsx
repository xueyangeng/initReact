import { useCreationList } from "@/hooks/creationlist";
import { Card, Col, Row, Space, Typography, Upload } from "antd";
import { FC } from "react";
const { Text, Title, Paragraph } = Typography;

import "./index.less";
import CreationItem from "./creation_item";
const List: FC = () => {
  const { creationList, creationListLoaded } = useCreationList();
  return <div className="dayan-page">
    <div className="dayan-page__header">
      <Typography.Text >大雁, 预留，记得把登陆做了</Typography.Text>
    </div>
    <div className="dayan-page__content">
      <div className="dayan-creation__container">
        <Upload
          accept="text/plain"
          name="file"
          action="http://127.0.0.1:3333/api/creation/upload"
          showUploadList={false}
          className="dayan-creation-card add">
          <div >
            <Space direction="vertical" size="middle">
              <Text>+</Text>
              <Text>添加新作品</Text>
            </Space>
          </div>
        </Upload>
        {creationList.map((creation) => {
          return <CreationItem key={creation.id} creation={creation} />;
        })}
      </div>
    </div>
  </div >;
};

export default List;