import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Menu, X } from 'lucide-react'

interface DocFile {
  path: string
  title: string
  category: string
}

const docFiles: DocFile[] = [
  { path: 'README.md', title: 'Documentation Home', category: 'General' },
  { path: 'architecture/overview.md', title: 'Architecture Overview', category: 'Architecture' },
  { path: 'api/endpoints.md', title: 'API Endpoints', category: 'API' },
  { path: 'deployment/vps.md', title: 'VPS Deployment', category: 'Deployment' },
  { path: 'user/guide-vi.md', title: 'Hướng Dẫn (VI)', category: 'User Guide' },
]

function App() {
  const [content, setContent] = useState('Loading...')
  const [currentPath, setCurrentPath] = useState('README.md')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Get base URL for GitHub Pages support
const BASE_URL = import.meta.env.BASE_URL || '/'

const loadDoc = async (path: string) => {
    try {
      const response = await fetch(`${BASE_URL}${path}`)
      if (response.ok) {
        const text = await response.text()
        setContent(text)
        setCurrentPath(path)
      } else {
        setContent('# Error\n\nCould not load document.')
      }
    } catch {
      setContent('# Error\n\nCould not load document.')
    }
  }

  useEffect(() => {
    loadDoc('README.md')
  }, [])

  const groupedFiles = docFiles.reduce((acc, file) => {
    if (!acc[file.category]) acc[file.category] = []
    acc[file.category].push(file)
    return acc
  }, {} as Record<string, DocFile[]>)

  return (
    <div style={{ display: 'flex' }}>
      {sidebarOpen && (
        <aside className="sidebar">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0 }}>Documentation</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>
          
          <nav>
            {Object.entries(groupedFiles).map(([category, files]) => (
              <div key={category} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
                  {category}
                </div>
                {files.map((file) => (
                  <button
                    key={file.path}
                    onClick={() => loadDoc(file.path)}
                    className={`nav-item ${currentPath === file.path ? 'active' : ''}`}
                    style={{
                      background: currentPath === file.path ? '#dee2e6' : 'transparent',
                      border: 'none',
                      width: '100%',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    {file.title}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>
      )}
      
      <main className="content" style={{ marginLeft: sidebarOpen ? '260px' : '0' }}>
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            style={{ 
              marginBottom: '1rem', 
              padding: '0.5rem',
              background: 'none',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Menu size={18} />
            Menu
          </button>
        )}
        
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </main>
    </div>
  )
}

export default App
