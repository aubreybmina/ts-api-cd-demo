import { getAllTasks, getOneTask } from '../../controllers/taskController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('getAllTasks', () => {
  test('should send all task via response', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]

    // Act
    getAllTasks(req, res)

    //Assert
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('getOneTasks', () => {
  test('should get one task id 1', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = {
      id: 1,
      name: 'Mission 01',
      description: 'Chatbot',
      isCompleted: false,
    }

    req.params.id = '1'

    // Act
    getOneTask(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })
})
