import { getAllTasks } from '../../controllers/taskController'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
  test('should send all task via response', () => {
    // Arrange
    const reqMock = getMockReq()
    const { res } = getMockRes()

    // Act
    getAllTasks(reqMock, res)

    //Assert
    expect(res.send).toBeCalledTimes(1)
  })
})

// describe('getOneTasks', () => {
//   test('should send 404 if not exist', () => {
//     // Arrange
//     const reqMock = getMockReq({ param: { id: '22' } as any })
//     const { res } = getMockRes()

//     // Act
//     getAllTasks(reqMock, res)

//     //Assert
//     expect(res.statusCode).toBe(404)
//   })
// })
