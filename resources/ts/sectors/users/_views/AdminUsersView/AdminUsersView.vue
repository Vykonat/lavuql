<template lang="pug">
    cur-layout( name="Admin" )
        apollo-query(
            :query="require('../../_gql/queries/usersQuery.gql')"
        )
            template( slot-scope="{ result: { data, loading, error}, query }" )
                //- Loading Handler
                .loading.apollo(v-if='loading')
                    grid.contentBelowNav
                        grid-row
                            grid-item( fill )
                                | {{ $t('core.loading') }}
                
                //- Error Handler
                .error.apollo(v-else-if='error') 
                    grid.contentBelowNav
                        grid-row
                            grid-item( fill )
                                pre {{ error }}

                //- Data Handler
                .result.apollo(v-else-if='data')
                    cur-modal( :show="isUserModalShown", @close="closeUserModal(query)" )
                        user-form( :is-add="isUserFormAdd", :user="userForm" )
                    grid.contentBelowNav
                        grid-row
                            grid-item
                                cur-button( variant="success", @click="handleUserAdd" ) {{ $t('resource.add', {resource:"User"})}}
                        grid-row
                            grid-item( fill )
                                data-table(
                                    :header="usersDataTableHeader", 
                                    :data="data.users",
                                    :placeholder="searchInputPlaceHolder",
                                )
                                    template( v-slot:actions="{ row }" )
                                        cur-button(
                                            variant="accent",
                                            :isGhost="true",
                                            @click="handleUserEdit(row)",
                                        )
                                            i.fas.fa-pencil-alt

                                        cur-button(
                                            v-if="row.role_id !== 1"
                                            variant="danger",
                                            :isGhost="true",
                                            @click="handleUserDelete(row, query)"
                                        )
                                            i.fas.fa-trash

</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import DeleteUser from "../../_gql/mutations/deleteUser.gql";

@Component({
    components: {
        UserForm: () => import(/* webpackChunkName: "User_Form" */ "../../_components/UserForm/UserForm.vue")
    }
})
export default class AdminUsersView extends Vue {

    isUserModalShown = false;
    isUserFormAdd = true;
    userForm = {
        role_id: 2,
    };

    @Provide() usersDataTableHeader = {
        id: {
            visible: false,
        },

        name: {
            title: 'Name',
        },

        email: {
            title: 'Email',
        },

        role_id: {
            visible: false,
        },

        created_at: {
            title: 'Created',
        },

        updated_at: {
            title: 'Updated',
        },

        actions: {
            sortable: false,
            title: 'Actions',
            slot: 'actions'
        },
    }

    closeUserModal(query): void {
        this.isUserModalShown = false;
        this.userForm = {
            role_id: 2
        }

        query.refetch();
    }

    handleUserAdd() {
        this.isUserFormAdd = true;
        this.isUserModalShown = true;
    }

    handleUserEdit(user): void {
        this.isUserFormAdd = false;
        this.isUserModalShown = true;

        const form = { ...user };
        this.userForm.role_id = user.role_id;
        delete form.__typename;
        delete form.created_at;
        delete form.updated_at;
        this.userForm = form;
    }


    async handleUserDelete({ id }, query): Promise<void> {
        if(! confirm('are you sure?')) return
        
        const result = await this.$apollo.mutate({
            mutation: DeleteUser,
            variables: {
                id,
            },
        });

        alert(this.$t('resource.deleted', {resource: "User"}));
        query.refetch();
    }


    get searchInputPlaceHolder() {
        /**
         * Necessary to use this getter, not sure what's wrong
         */
        return this.$t('resource.search', {resource: "Users"});
    }
}
</script>
