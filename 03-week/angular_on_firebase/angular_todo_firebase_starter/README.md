##Putting our Angular todo list on Firebase!
1 - add 'firebase' as a dependency in our module
2 - include firebase and angularfire js scripts (after angular, before app.js)

<script src="js/angular.min.js"></script>
    <!-- Firebase -->
    <script src="https://cdn.firebase.com/js/client/2.0.4/firebase.js"></script>
    <!-- AngularFire -->
    <script src="https://cdn.firebase.com/libs/angularfire/0.9.1/angularfire.min.js"></script>

3 - controllerFunction.$inject = ['$firebaseArray'];