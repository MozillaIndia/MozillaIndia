import React from 'react'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaGitSquare,
  FaGlobe,
  FaMeetup,
} from 'react-icons/fa'

const Groups = ({ name, data, description }) => (
  <div className="tile is-ancestor is-vertical">
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent is-vertical">
            <p className="title">{name}</p>
            {description}
          </div>
          <div className="columns is-multiline">
            {data.edges.map(({ node }) => (
              <div className="column is-4" key={node.id}>
                <div className="tile is-child box">
                  <p className="subtitle">{node.name}</p>
                  {node.website ? (
                    <a href={node.website}>
                      <FaGlobe size="24px" color="#1da1f2" />
                    </a>
                  ) : null}
                  {node.telegram ? (
                    <a href={node.telegram}>
                      <FaTelegramPlane size="24px" color="#1da1f2" />{' '}
                    </a>
                  ) : null}
                  {node.twitter ? (
                    <a href={node.twitter}>
                      <FaTwitterSquare size="24px" color="#1da1f2" />{' '}
                    </a>
                  ) : null}
                  {node.github ? (
                    <a href={node.github}>
                      <FaGitSquare size="24px" color="#ad5c51" />
                    </a>
                  ) : null}
                  {node.instagram ? (
                    <a href={node.instagram}>
                      <FaInstagram size="24px" color="#3f729b" />{' '}
                    </a>
                  ) : null}
                  {node.facebook ? (
                    <a href={node.facebook}>
                      <FaFacebookSquare size="24px" color="#1da1f2" />
                    </a>
                  ) : null}
                  {node.meetup ? (
                    <a href={node.meetup}>
                      <FaMeetup size="24px" color="#1da1f2" />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Groups
