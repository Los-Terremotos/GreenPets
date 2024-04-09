// import { getTokenFromRequest, startApolloServer } from '../src/index';
// import { ApolloServer } from "@apollo/server";

// test('getTokenFromRequest extracts token from headers', () => {
//   const req = { headers: { authorization: 'Bearer testToken' } };
//   const token = getTokenFromRequest(req);
//   expect(token).toBe('Bearer testToken');
// });

/* Test below is passing but need to look into with this lead:

Jest did not exit one second after the test run has completed.

'This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
*/

// test('ApolloServer is initialized correctly', async () => {
//   // Create the server instance within the test
//   const server = await startApolloServer();
//   expect(server).toBeInstanceOf(ApolloServer);
// });

// test('Standalone server is started successfully', async () => {
//   // Create the server instance within the test
//   const server = await startApolloServer();
//   const logSpy = jest.spyOn(console, 'log');
//   await server.start();
//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Server is running!'));
// });

// test('Context function returns the correct context', async () => {
//   // Create the server instance within the test
//   const server = await startApolloServer();
//   const req = { headers: { authorization: 'Bearer testToken' } };
//   const context = await server.context({ req });
//   expect(context).toHaveProperty('token', 'Bearer testToken');
//   expect(context.dataSources).toHaveProperty('plantBasic');
//   expect(context.dataSources).toHaveProperty('plantExpanded');
// });