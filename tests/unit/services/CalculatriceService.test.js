const assert = require("assert");
const sinon = require("sinon");
describe('CalculatriceService', function () {

    describe('#additionner()', function () {
        it('should add two values', function (done) {

            // Setup
            let a = 5;
            let b = 6;
            let result = CalculatriceService.additionner(a, b);
            assert.equal(result, 11);
            return done();
        });
    });

    describe('#diviser()', function () {
        it('should divide two values', function (done) {
            let a = 15;
            let b = 3;

            let result = CalculatriceService.diviser(a, b);

            assert.equal(result, 5);

            return done()
        });

        it('should not divide by 0', function (done) {
            let a = 15;
            let b = 0;

            assert.throws(() => { CalculatriceService.diviser(a, b) }, { message: 'impossible' });
            return done()

        })
    })

    describe('#pourcentage()', function () {
        it('should calculate a percentage', function (done) {
            let a = 100;
            let b = 20;

            var stub1 = sinon.stub(CalculatriceService, 'multiplier').callsFake((a, b) => { return 100 })
            var stub2 = sinon.stub(CalculatriceService, 'diviser').callsFake((a, b) => { return 20 })

            let result = CalculatriceService.pourcentage(a, b)

            assert.equal(result, 20);

            CalculatriceService.multiplier.restore();
            CalculatriceService.diviser.restore();


            return done();
        })
        describe('#puissance()', function () {
            it('should calculate a pow', function (done) {
                let a = 3;
                let b = 3;

                let result = CalculatriceService.puissance(a, b)
                assert.equal(result, 27);
                return done();
            })
            describe('#multiplier()', function () {
                it('should call multiplier', function (done) {
                    let a = 3;
                    let b = 3;
                    //let spy = sinon.spy(CalculatriceService, multiplier)
                    let result = CalculatriceService.multiplier(a, b)
                    assert.equal(result, 9);
                    return done();
                })
            })

        })

    })


});