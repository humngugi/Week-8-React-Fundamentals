import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1)
      setHasLiked(false)
    } else {
      setLikes(likes + 1)
      setHasLiked(true)
    }
  }

  const gamingStats = [
    { label: 'Mobile Gamers Worldwide', value: '3.2B+' },
    { label: 'Market Revenue (2024)', value: '$136B' },
    { label: 'Average Daily Play Time', value: '4.2 hrs' },
    { label: 'Top Gaming Countries', value: '150+' }
  ]

  const popularGames = [
    { name: 'PUBG Mobile', genre: 'Battle Royale', players: '1B+' },
    { name: 'Genshin Impact', genre: 'RPG', players: '65M+' },
    { name: 'Candy Crush', genre: 'Puzzle', players: '500M+' },
    { name: 'Call of Duty Mobile', genre: 'FPS', players: '600M+' },
    { name: 'Mobile Legends', genre: 'MOBA', players: '1B+' }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>🎮 GamingHub</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#articles">Articles</a>
          <a href="#games">Games</a>
          <a href="#community">Community</a>
        </nav>
      </header>

      <main className="main-content">
        <article className="article">
          <header className="article-header">
            <span className="category">Mobile Gaming</span>
            <h1>The Rise of Online Mobile Gaming: A Digital Revolution</h1>
            <div className="meta">
              <span className="author">By Alex Chen</span>
              <span className="date">April 21, 2026</span>
              <span className="read-time">8 min read</span>
            </div>
          </header>

          <div className="featured-image">
            <div className="image-placeholder">🎮</div>
          </div>

          <div className="article-content">
            <p className="lead">
              Mobile gaming has transformed from simple time-killers into a 
              multi-billion dollar industry that rivals traditional console and PC gaming. 
              With over 3 billion mobile gamers worldwide, the pocket-sized revolution 
              is reshaping how we play, connect, and compete.
            </p>

            <section>
              <h2>📱 The Mobile Gaming Explosion</h2>
              <p>
                The smartphone revolution didn't just change how we communicate—it 
                fundamentally altered the gaming landscape. What started with Snake 
                on Nokia phones has evolved into immersive, console-quality experiences 
                that fit in your pocket.
              </p>
              <p>
                In 2024, mobile gaming generated over $136 billion in revenue, 
                accounting for more than 50% of the global gaming market. This 
                staggering growth is driven by several key factors:
              </p>
              <ul>
                <li><strong>Accessibility:</strong> Everyone with a smartphone is a potential gamer</li>
                <li><strong>Connectivity:</strong> 5G networks enable seamless online multiplayer</li>
                <li><strong>Technology:</strong> Advanced mobile processors rival entry-level PCs</li>
                <li><strong>Free-to-Play:</strong> Lower barrier to entry attracts massive audiences</li>
              </ul>
            </section>

            <section>
              <h2>🎯 Why Mobile Gaming Dominates</h2>
              <p>
                The appeal of mobile gaming extends beyond convenience. Modern mobile 
                games offer social connection, competitive gameplay, and experiences 
                that adapt to our busy lifestyles.
              </p>
              <blockquote>
                "Mobile gaming isn't just about playing games—it's about staying 
                connected with friends, competing globally, and finding community 
                wherever you are."
              </blockquote>
              <p>
                The average mobile gamer spends 4.2 hours daily engaged with their 
                favorite titles. This isn't casual play; it's a lifestyle choice 
                that integrates seamlessly with modern life.
              </p>
            </section>

            <section>
              <h2>🏆 Most Popular Mobile Games in 2026</h2>
              <div className="games-table">
                <table>
                  <thead>
                    <tr>
                      <th>Game</th>
                      <th>Genre</th>
                      <th>Active Players</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularGames.map((game, index) => (
                      <tr key={index}>
                        <td><strong>{game.name}</strong></td>
                        <td>{game.genre}</td>
                        <td>{game.players}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>💡 The Technology Behind the Magic</h2>
              <p>
                Modern mobile games leverage cutting-edge technology to deliver 
                experiences that were unimaginable a decade ago:
              </p>
              <ul>
                <li><strong>Cloud Gaming:</strong> Stream AAA titles directly to your phone</li>
                <li><strong>Cross-Platform Play:</strong> Compete with PC and console players</li>
                <li><strong>AR Integration:</strong> Blend digital and physical worlds</li>
                <li><strong>AI-Powered NPCs:</strong> Smarter, more responsive game worlds</li>
              </ul>
            </section>

            <section>
              <h2>🌍 Social Impact and Community</h2>
              <p>
                Mobile gaming has become a social platform in its own right. Games 
                like PUBG Mobile and Mobile Legends have created vibrant communities, 
                professional esports scenes, and even career opportunities for millions 
                of players worldwide.
              </p>
              <p>
                The rise of mobile esports has been particularly significant in 
                developing markets, where smartphones provide the primary access 
                point to competitive gaming.
              </p>
            </section>

            <section>
              <h2>🔮 The Future of Mobile Gaming</h2>
              <p>
                As we look ahead, several trends are shaping the future:
              </p>
              <ul>
                <li>Virtual Reality integration for immersive mobile experiences</li>
                <li>Blockchain and NFT gaming creating new economies</li>
                <li>AI-generated content for endless gameplay variations</li>
                <li>Seamless metaverse integration across platforms</li>
              </ul>
            </section>

            <div className="stats-grid">
              {gamingStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="article-footer">
              <button 
                className={`like-button ${hasLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <span className="like-icon">{hasLiked ? '❤️' : '🤍'}</span>
                <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
              </button>
              
              <div className="share-section">
                <span>Share this article:</span>
                <div className="share-buttons">
                  <button className="share-btn">📱 Copy Link</button>
                  <button className="share-btn">🐦 Twitter</button>
                  <button className="share-btn">💬 WhatsApp</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <p>&copy; 2026 GamingHub. All rights reserved.</p>
        <p>🎮 Play Smart. Play Safe. Have Fun!</p>
      </footer>
    </div>
  )
}

export default App  