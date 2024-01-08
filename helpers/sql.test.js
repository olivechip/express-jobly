const { sqlForPartialUpdate } = require('./sql');

describe("sqlForPartialUpdate", function(){
    test("Returns valid SQL when JSON passed in", function(){
        const res = sqlForPartialUpdate({firstName: 'Aliya', lastName: "User", isAdmin: true}, {
            firstName: "first_name",
            lastName: "last_name",
            isAdmin: "is_admin",
          });
          expect(res).toHaveProperty("values");
          expect(res.values).toHaveLength(3);
    });
});