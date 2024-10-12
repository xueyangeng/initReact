import { useCreationList } from "@/hooks/creationlist";
import { Card, Col, Row, Space, Typography, Upload } from "antd";
import { FC } from "react";
const { Text, Title, Paragraph } = Typography;

import "./index.less";
import { TCreation } from "@/types/creation";
const CreationItem: FC<{
  creation: TCreation;
}> = ({
  creation,
}) => {
    return <div className="dayan-creation-card">
      <div
        className="dayan-creation-card__cover"
        style={{
          backgroundImage: `url(${creation.cover ? creation.cover : `https://powwriter-1257380273.cos.ap-beijing.myqcloud.com/public/cover/cover-${Math.floor(parseInt(creation.id) % 10) + 1}.png`})`,
        }}
      >
        {creation.title}
      </div>
      <div className="dayan-creation-card__content">
        <Title level={5} >{creation.title}</Title>
        <p>
          <Text type="secondary" >
            台本校对中：{creation.progress?.checking ? creation.progress.checking : 0}&nbsp;/&nbsp;
            {creation.progress?.total ? creation.progress.total : 0}
          </Text>
        </p>
        <p>
          <Text type="secondary" >
            配音中：{creation.progress?.dubbing ? creation.progress.dubbing : 0}&nbsp;/&nbsp;
            {creation.progress?.total ? creation.progress.total : 0}
          </Text>
        </p>
        <p>
          <Text type="secondary" >
            总进度：{creation.progress?.total ? creation.progress.total : 0}&nbsp;/&nbsp;
            {creation.progress?.total ? creation.progress.total : 0}
          </Text>
        </p>
      </div>
    </div>;
    ;
  };

export default CreationItem;