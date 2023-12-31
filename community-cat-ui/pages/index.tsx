import AppLayout from "components/layouts/AppLayout";
import { Card } from "antd";
import { Menu, Input, Row, Col, Button } from "antd";
import styled from "styled-components";
import CatCard from "components/feature/index/CatCard";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import api from "utils/api";
import {useAuth} from "../utils/store";

const { Meta } = Card;

const XCatList = styled.div``;

function Home() {
  const [cats, setCats] = useState([]);
  const { me, login, logout } = useAuth();

  const getCats = async () => {
    const response = await axios.get(`${api.gomuApi}/user`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + me.token,
      },
    });

    setCats(response.data);
  };

  useEffect(() => {
    const localStorageMe = localStorage.getItem("me");
    if (localStorageMe) {
      login(JSON.parse(localStorageMe));
    }
  }, []);

  useEffect(() => {
      if (me) {
        getCats();
      }
  }, [me]);

  return (
    <AppLayout>
      <XCatList>
        <Row gutter={10}>
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </Row>
      </XCatList>
    </AppLayout>
  );
}

export default Home;
