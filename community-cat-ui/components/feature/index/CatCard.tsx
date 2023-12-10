import { Card } from "antd";
import { Menu, Input, Row, Col } from "antd";
import { MeType } from "utils/store";
import api from "../../../utils/api";
const { Meta } = Card;

type Props = {
  cat: MeType;
};

function CatCard({ cat }: Props) {
  return (
    <Col xs={24} sm={12} md={8}>
      <Card
        hoverable
        style={{ width: 300, marginBottom: 50 }}
        cover={<img alt="cat" src={`${api.imagePath}/${cat.imgUrl}`} />}
      >
        <Meta title={cat.email} description={cat.name} />
      </Card>
    </Col>
  );
}

export default CatCard;
