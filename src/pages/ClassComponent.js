import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import blind from "../blind.png";
import back from "../back.png";
import watch from "../watch.png";

export class ClassComponent extends Component {
  render() {
    return (
      <>
        <div className="pt-5 mt-5"></div>
        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col md={6} xl={4} className="blind d-none d-md-block"></Col>
            <Col xs={12} className="gx-0 gx-md-auto d-block d-md-none">
              <Image className="w-100" src={blind} alt="blind" />
            </Col>
            <Col
              xs={12}
              md={6}
              xl={4}
              className="bg-light position-relative px-3 px-xxl-5"
            >
              <div className="content pt-3 pb-5">
                <h1 className="text-center my-3">What is Blockchain</h1>
                <div className="mt-5 pb-5">
                  <p
                    style={{
                      color:
                        this.props.mode === "light" ? "#212529" : "#212529",
                    }}
                  >
                    Your one-stop guide to all things in crypto. Whether you're
                    a beginner trying to understand mining or a veteran looking
                    to develop a trading strategy, we've got you covered.
                  </p>
                  <p>
                    A Blockchain is an immutable database; if you change a
                    block, it changes the fingerprint. And since that
                    fingerprint is included in the next block, the next block is
                    changed too. You end up in a domino effect where any change
                    becomes evident. You can't alter any information without
                    everyone noticing. As each fingerprint points back to the
                    last one, you end up with a chain of blocks; called
                    Blockchain.
                  </p>
                </div>
                <div className="margintop"></div>
                <div className="mt-md-5 pt-md-5">
                  <button className="position-absolute bottom-0 start-50 translate-middle-x csbtn">
                    Coming Soon
                  </button>
                </div>
              </div>
            </Col>
            <Col xl={4} className="back d-none d-xl-block"></Col>
            <Col xs={12} className="gx-0 gx-md-auto d-block d-md-none">
              <Image className="w-100" src={back} alt="back" />
            </Col>
            <Col
              xs={12}
              md={6}
              xl={4}
              className="bg-light position-relative px-3 px-xxl-5"
            >
              <div className="content pt-3">
                <h1 className="text-center my-4 my-sm-3">
                  How to mine crypto!
                </h1>
                <p className="mt-sm-4 pb-5 py-sm-5">
                  Blockchain networks use mining to create and validate new
                  blocks of transactions and secure the network. In the process,
                  the miners use significant amounts of computational resources
                  to create new units of cryptocurrencies, increasing their
                  existing circulating supply. However, it's also possible to
                  disrupt a blockchain with a so-called 51% attack. While very
                  unlikely, especially for the larger blockchain networks, a
                  single entity or organization could, in theory, take over 50%
                  of the network's computing power. That amount of mining power
                  would let the attacker intentionally exclude or alter the
                  ordering of transactions, also enabling them to reverse their
                  own transactions.
                </p>
                <div className="margintop"></div>
                <div className="py-4 py-md-5">
                  <button className="position-absolute bottom-0 start-50 translate-middle-x csbtn">
                    Coming Soon
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} className="back d-none d-md-block d-xl-none"></Col>
            <Col md={6} xl={4} className="watch d-none d-md-block"></Col>
            <Col xs={12} className="gx-0 gx-md-auto d-block d-md-none">
              <Image className="w-100" src={watch} alt="watch" />
            </Col>
            <Col
              xs={12}
              md={6}
              xl={4}
              className="bg-light position-relative px-3 px-xxl-5"
            >
              <div className="content pt-3">
                <h1 className="text-center my-3 lh-1">
                  How does Real Estate exist in the metaverse?
                </h1>
                <p className="mt-5 pb-5">
                  For newcomers to the metaverse, digital real estate can sound
                  like an oxymoron. The idea of physical property and real
                  estate are firmly intertwined. However, while blockchain-based
                  real estate in the metaverse may not be physical, in the same
                  contracts or perhaps even stronger contract, ownership rights
                  over a plot of (digital) land. Land ownership in a game,
                  community, or other platform is represented by an (NFT). Many
                  people purchase metaverse real estate NFTs because;
                  <br /> 1. Utility: They can host virtual guests on their
                  Sandbox property and create an immersive experience.
                  <br /> 2. Collectibility: Metaverse real estate is a highly
                  collectable piece of pop culture that can aid marketing
                  efforts.
                  <br /> 3. Speculative properties: It's unlikely that JPMorgan
                  would have bought land without expecting to either sell it for
                  profit or increase its revenue via customer acquisition.
                </p>
                <div className="margintop"></div>
                <div className="mt-5 pt-4 pt-md-5">
                  <button className="position-absolute bottom-0 start-50 translate-middle-x csbtn">
                    Coming Soon
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="py-8"></div>
      </>
    );
  }
}

export default ClassComponent;
