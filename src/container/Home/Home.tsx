import { Layout, Typography, Card, Divider, Row, Col } from 'antd';
import React, { useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Member from '../../components/member/Member';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../../Redux/Thunks/PostThunk.thunk';
import { RootState } from '../../store/store';
import { FilterOutlined } from '@ant-design/icons';
import { iniitialStateType } from '../../Redux/Slices/PostsSlice';
import MainWrapper from './Home.styles';

const {Content} = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;

function Home () {
    const dispatch = useDispatch();
    const messagesEndRef: any = useRef(null);
    const styles = {
        layout: { flexDirection: 'row' as 'row', overflow: 'hidden' as 'hidden' },
        content: {
          background: '#f7f7f7' as '#f7f7f7',
          position: 'relative' as 'relative',
          height: '100%',
          overflow: 'auto',
        }
    }

    const {allPosts} = useSelector((state: RootState) => state.PostsSlice)

    useEffect(() => {
        // @ts-ignore
        dispatch(getPostsThunk())
    }, [])

    return (
        <MainWrapper>
            <Member />
            <Layout style={styles.layout}>
                <Sidebar />
                <Layout 
                    className='isoContentMainLayout'
                    style={{
                    height: window.innerHeight,
                    }}
                >   
                <div
                    ref={messagesEndRef}
                    className='isomorphicContent'
                    style={{
                        ...styles.content,
                        overflowY: 'scroll',
                        scrollBehavior: 'smooth',
                    }}
                >
                    <Content style={{ padding: '20px' }}>
                        <div ref={messagesEndRef} />
                    <Title level={2}>BEDROOM</Title>
                    <Text>It's easy to transform your bedroom interior with our great selection of accessories.</Text>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <Text strong>
                            <FilterOutlined /> FILTER & SORT
                        </Text>
                        <div>
                            <Text strong style={{ marginRight: '20px' }}>Models</Text>
                            <Text>Products</Text>
                        </div>
                    </div>
                    <Row gutter={[16, 16]}>
                    {allPosts?.length > 0 && allPosts?.map((item) => (
                            <Col span={8}>
                            <Card
                                hoverable
                                cover={<img alt="img" src={item?.image} />}
                                >
                                <Meta title={item?.title} description={`$${item.price}`} />
                            </Card>
                            </Col>
                    ))}
                    </Row>
                    </Content>
                </div>

                </Layout>
            </Layout>
        </MainWrapper>
    )
}

export default Home;