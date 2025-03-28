import React, { useState } from 'react'
import { Card, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select'
import { motion } from 'motion/react'

const App = () => {
  const [skillsOffered, setSkillsOffered] = useState('')
  const [skillsWanted, setSkillsWanted] = useState('')
  const [users, setUsers] = useState([])

  const handleSearch = () => {
    // Placeholder: Replace with API call to fetch matching users
    const mockUsers = [
      { id: 1, name: 'Harvey', offers: 'Ballet', wants: 'Crochet' },
      { id: 2, name: 'Bon', offers: 'Coding', wants: 'Photography' },
    ]
    setUsers(mockUsers)
  }

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center mb-8'
      >
        <h1 className='text-3xl font-bold mb-4'>Skill Exchange Platform</h1>
        <p className='text-lg'>Connect with people to exchange skills and knowledge.</p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        <div>
          <Input
            placeholder='Skills you offer'
            value={skillsOffered}
            onChange={(e) => setSkillsOffered(e.target.value)}
            className='w-full'
          />
        </div>
        <div>
          <Input
            placeholder='Skills you want to learn'
            value={skillsWanted}
            onChange={(e) => setSkillsWanted(e.target.value)}
            className='w-full'
          />
        </div>
      </div>

      <div className='text-center mb-8'>
        <Button onClick={handleSearch} className='w-full md:w-auto'>
          Search for Matches
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {users.map((user) => (
          <Card key={user.id} className='shadow-md'>
            <CardContent>
              <h2 className='text-xl font-semibold'>{user.name}</h2>
              <p className='text-gray-700'>Offers: {user.offers}</p>
              <p className='text-gray-700'>Wants: {user.wants}</p>
              <Button className='mt-4 w-full'>Connect</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App